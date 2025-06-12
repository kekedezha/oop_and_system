// Portfolio System v2: top Performers and Dynamic Pricing
// Scenario/Task: You are building a simplified portfolio tracker for a fintech company. You're
// tasked with implementing a Portfolio and Asset system that can:
// 1. Track a set of assets
// 2. Calculate the total value of the portfolio
// 3. filter assets by type ("Stock" or "Bond")
// 4. Return the top N assets by value
// 5. Dynamically update asset prices using a mock price feed

/**
 * Requirements:
 *  Asset Class:
 *      Properties:
 *          symbol: string
 *          type: "Stock" or "Bond"
 *          quantity: number
 *          price: number
 *      Method:
 *          getValue() - returns quantity * price
 *          updatePrice(newPrice: number) -- updates the asset's current price
 *
 *  Portfolio Class:
 *      Properties:
 *          name: string
 *          owner: string
 *          assets: Asset[]
 *      Method:
 *          addAsset(asset: Asset)
 *          getTotalValue()
 *          filterAssetsByType(type: "Stock" or "Bond")
 *          getTopAssets(n: number) -- returns the top n assets by getValue()
 *          updatePrices(priceFeed: Record<string, number>) - accepts an object like { "AAPL": 200, "GOOG": 2800 }
 * */

type AssetType = "Stock" | "Bond";

class Asset {
  symbol: string;
  type: AssetType;
  quantity: number;
  price: number;

  constructor(
    symbol: string,
    type: AssetType,
    quantity: number,
    price: number
  ) {
    this.symbol = symbol;
    this.type = type;
    this.quantity = quantity;
    this.price = price;
  }

  // Method to return value of assets - quantity * price
  getValue(): number {
    return this.quantity * this.price;
  }

  // Method to update the price of the asset
  updatePrice(newPrice: number): void {
    this.price = newPrice;
  }
}

class Portfolio {
  name: string;
  owner: string;
  assets: Asset[];

  constructor(name: string, owner: string) {
    this.name = name;
    this.owner = owner;
    this.assets = [];
  }

  // Method to add new asset to portfolio
  addAsset(asset: Asset): void {
    this.assets.push(asset);
  }

  // Method to get total value of portfolio
  getTotalValue(): number {
    return this.assets.reduce((total, asset) => total + asset.getValue(), 0);
  }

  // Method to filter portfolio by 'Stock's or "Bond"s
  filterAssetsByType(type: AssetType): Asset[] {
    return this.assets.filter((asset) => asset.type === type);
  }

  // Method to get top number of 'n' assets from users portfolio
  getTopAssets(n: number): Asset[] {
    return [...this.assets]
      .sort((a: Asset, b: Asset) => b.getValue() - a.getValue())
      .slice(0, n);
  }

  // Method to update prices from incoming price feed
  updatePrices(priceFeed: Record<string, number>): void {
    for (const asset of this.assets) {
      const newPrice = priceFeed[asset.symbol];
      if (newPrice !== undefined) {
        asset.updatePrice(newPrice);
      }
    }
  }
}

const portfolio = new Portfolio("Growth Portfolio", "Christian");

portfolio.addAsset(new Asset("AAPL", "Stock", 10, 190));
portfolio.addAsset(new Asset("GOOG", "Stock", 5, 2700));
portfolio.addAsset(new Asset("US10Y", "Bond", 20, 100));

portfolio.updatePrices({ AAPL: 200, GOOG: 2800 }); // New market prices

console.log("Total Value of porfolio: ", portfolio.getTotalValue()); // Updated value
console.log("Top two assets by value: ", portfolio.getTopAssets(2)); // Top 2 assets by value
