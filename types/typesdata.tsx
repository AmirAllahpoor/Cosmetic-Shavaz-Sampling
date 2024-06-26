export type UserDataType = {
    expires : string
    user : {
      name : string
      email : string
      image : string
    }
  }
  
  export type RegisProps = {
    headtext: string;
    textbtn: string;
    textlast: string;
    pathgo: string;
  };

  export type UserType = {
    UserName : string
    Email : string
    Password : string
  }
  export type UserType2 = {
    Email : string
    Password : string
  }

  export type SelectorType = {
    MyUserSlice : {
      email : string
      password : string
      id : string
      username : string
      avatar : string
    }
    _persist : {
      rehydrated : boolean
      version : number
    }
  }

  export type ProductType = {
      id : string
      image : string
      title : string
      price : string
      category : string
    }

  export type HomePageProps = {
    SunScreenData : ProductType[]
    MoisturizingData : ProductType[]
    WashingGelData : ProductType[]
    ShampooData : ProductType[]
  }
  
  export type SuggestionCPProps = {
    DataProduct : ProductType[]
    BgColor : string
  }

  export type ProductSupriseProps = {
    image : string
    PrimaryPrice : string
    SecondaryPrice : string
    Offer : string
  }
  
  export type BSProductProps = ProductSupriseProps & {
    title : string
  }

  export type BrandBannerProps = {
    image1 : string
    image2 : string
    image3 : string
    image4 : string
  }

  export type DataUserType = {
      email : string
      password? : string
      id? : string
      username : string
      avatar : string
  }

  export type ProfileProps = {
    UserData : DataUserType
  }