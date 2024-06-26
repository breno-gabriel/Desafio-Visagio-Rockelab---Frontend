interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  }
  
  interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: any | null;
    promise: any | null;
  }
  
  interface Seller {
    id: number;
    nickname: string;
  }
  
  interface AttributeValue {
    id: string;
    name: string;
    struct: any | null;
    source: number;
  }
  
  interface Attribute {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct: any | null;
    values: AttributeValue[];
    source: number;
    value_type: string;
  }
  
  export interface Result {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id: string;
    listing_type_id: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price: number;
    sale_price: number | null;
    available_quantity: number;
    official_store_id: number;
    official_store_name: string;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    shipping: Shipping;
    stop_time: string;
    seller: Seller;
    attributes: Attribute[];
  }
  
  interface ApiResponse {
    site_id: string;
    country_default_time_zone: string;
    query: string;
    paging: Paging;
    results: Result[];
  }
  
  async function fetchSearchResults(query: string): Promise<Result[]> {

    if (query == "") query = "Acer Nitro 5"; 

    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data: ApiResponse = await response.json();
    return data.results;
  }

  export default fetchSearchResults; 

  
  