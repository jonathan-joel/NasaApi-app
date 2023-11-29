export type PostImage = {
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;
  };
  
  export type RootStackParams = {
    Home: undefined;
    Detail: PostImage;
  };
  
  export type routesScreenDefaultOptionsTypes = {
    headerStyle?: {background: string};
    headerTitleStyle?: {color: string};
    headerTitleAlign?: string;
  };
  