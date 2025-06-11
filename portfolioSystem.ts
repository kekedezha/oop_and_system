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
  getAssetSymbols(symbol: string): string[] {
    return this.assets.map((asset) => asset.symbol);
  }
}
