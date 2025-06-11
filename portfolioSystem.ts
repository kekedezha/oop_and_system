// Portfolio System OOP/System Design Problem
// Task: Design a basic portfolio system in JS/TS
// Requirements:
// - A Portfolio contains multiple Assets
// - Each Asset has a symbol, type (Stock or Bond), quantity, and price
// - Add a method or compute totalValue
// - Add a method to filter by type

//Define an Asset type
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

  getValue(): number {
    return this.quantity * this.price;
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

  // Add an asset to the portfolio
  addAsset(asset: Asset): void {
    this.assets.push(asset);
  }

  // Add the total value of all assets in portfolio
  getTotalValue(): number {
    return this.assets.reduce((total, asset) => total + asset.getValue(), 0);
  }

  // Return all assets that are either only stocks or only bonds
  filterAssetsByType(type: AssetType): Asset[] {
    return this.assets.filter((asset) => asset.type === type);
  }

  // Get all symbols in the portfolio
  getAssetSymbols(): string[] {
    return this.assets.map((asset) => asset.symbol);
  }

  //   getTopThreeAssets(): Asset[] {

  //   }
}

const portfolio1 = new Portfolio("Dezha's Portfolio Test", "Christian Dezha");

const asset1 = new Asset("AAPL", "Stock", 10, 190);
const asset2 = new Asset("GOOG", "Stock", 5, 2800);
const asset3 = new Asset("US10Y", "Bond", 20, 100);

portfolio1.addAsset(asset1);
portfolio1.addAsset(asset2);
portfolio1.addAsset(asset3);

console.log("Total Value of portfolio: ", portfolio1.getTotalValue());
console.log("All asset symbols of portfolio: ", portfolio1.getAssetSymbols());
console.log(
  "All assets that are stocks: ",
  portfolio1.filterAssetsByType("Stock")
);
