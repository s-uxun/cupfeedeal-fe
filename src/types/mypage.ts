// 마이페이지 메인
export interface MyInfo {
  username: string;
  user_level: number;
  cupcat_id: number;
  cafe_name: string;
  birth_date: string;
}

// 구독 내역
export interface Subscription {
  user_subscription_id: number;
  cafe_id: number;
  cafe_name: string;
  menu: string;
  cafe_subscription_name: string;
  period: number;
  price: number;
  start: string;
  end: string;
  status: string;
  remain: number;
}

// 지나간 컵캣
export interface Cupcat {
  cafe_name: string;
  cupcat_id: number;
}

export interface CupcatList {
  level: number;
  cupcats: Cupcat[];
}

// 문의하기
export interface Input {
  email: string;
  category: string;
  description: string;
}

export interface SelectProps {
  options: string[];
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
