// Task: Design a basic portfolio system in JS/TS
// Requirements:
// - A Portfolio contains multiple Assets
// - Each Asset has a symbol, type (Stock or Bond), quantity, and price
// - Add a method or compute totalValue
// - Add a method to filter by type

type AssetType = 'Stock' | 'Bond';

type Asset = {
    symbol: string,
    type: AssetType,
    quantity: number,
    price: number
}

class Portfolio {
    name: string;
    owner: string;
    assets: Asset[];
    //getTotalValue(): number {...}
}
