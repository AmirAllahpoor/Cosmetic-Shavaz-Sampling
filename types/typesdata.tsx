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
