// ~/models/Catalogue.ts

interface Specifications {
  screen_size: string;
  front_camera: string;
  rear_camera: string;
  ram: string;
  storage: string;
  battery: string;
  os: string;
  product_code: string;
  color: string;
}

export interface Catalogue {
  id: number;
  name: string;
  brand_id: number;
  brand_name: string;
  category_id: number;
  category_name: string;
  specifications: Specifications;
  image_url: string;
  price: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  published_at: string | null;
  created_by: string;
  updated_by: string;
  deleted_by: string | null;
  categories: string | null;
}

export interface CatalogueResponse {
  data: Catalogue[];
  pagination: {
    next_page_cursor: string;
    per_page: number;
    asc: boolean;
    has_next: boolean;
    total_count: number;
  };
}
