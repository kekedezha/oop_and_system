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

type AssetTypeV2 = "Stock" | "Bond";

class Asset {
  symbol: string;
  type: AssetTypeV2;
  quantity: number;
  price: number;

  constructor(
    symbol: string,
    type: AssetTypeV2,
    quantity: number,
    price: number
  ) {
    this.symbol = symbol;
    this.type = type;
    this.quantity = quantity;
    this.price = price;
  }

  // Method to return value of asset - quantity * price
  getValue(): number {
    return this.quantity * this.price;
  }

  // Method to update price of asset
  updatePrice(newPrice: number): void {
    this.price = newPrice;
  }
}

class PortfolioV2 {
  name: string;
  owner: string;
  assets: Asset[];

  constructor(name: string, owner: string) {
    this.name = name;
    this.owner = owner;
    this.assets = [];
  }

  // Method to add asset to owners portfolio
  addAsset(asset: Asset): void {
    this.assets.push(asset);
  }

  // Method to get the total value of owners portfolio
  getTotalValue(): number {
    return this.assets.reduce((total, asset) => total + asset.getValue(), 0);
  }

  // Method to filter assets by asset type. Returns all assets that are either "Stock"s or "Bond"s
  filterAssetsByType(type: AssetTypeV2): Asset[] {
    return this.assets.filter((asset) => asset.type === type);
  }

  getTopAssets(n: number): Asset[] {
    this.assets.sort((a: Asset, b: Asset) => b.getValue() - a.getValue());
    return this.assets.slice(0, n);
  }

  updatePrices(priceFeed: Record<string, number>): void {
    for (const asset of this.assets) {
      const newPrice = priceFeed[asset.symbol];
      if (newPrice != undefined) {
        asset.updatePrice(newPrice);
      }
    }
  }
}
