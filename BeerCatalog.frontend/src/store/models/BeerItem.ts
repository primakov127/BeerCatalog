interface ValueWithUnit {
  value: number;
  unit: string;
}

interface Malt {
  name: string;
  amount: ValueWithUnit;
}

interface Hops {
  name: string;
  amount: ValueWithUnit;
  add: string;
  attribute: string;
}

interface Mash {
  temp: ValueWithUnit;
  duration: number;
}

export interface BeerItem {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  description: string;
  abv: number;
  ibu: number;
  ebc: number;
  food_pairing: string[];
  brewers_tips: string;
  ingredients: {
    malt: Malt[];
    hops: Hops[];
    yeast: string;
  };
  method: {
    mash_temp: Mash[];
    fermentation: {
      temp: ValueWithUnit;
    };
    twist: string | null;
  };
}
