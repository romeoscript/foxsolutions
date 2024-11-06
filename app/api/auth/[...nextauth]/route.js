import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
const handler = NextAuth({
session:{
   jwt:true,
},
secret:process.env.NEXTAUTH_SECRET,
providers:[
   CredentialsProvider({
      
       type:"credentials",
       credentials:{
       },
       async authorize(credentials,req) {
           const{email,password} = credentials;
           if(email!==process.env.email || password!==process.env.password)
                throw new Error('invalid credentials');
           
           if( email==process.env.email && password==process.env.password);

          return{
           id:"1996", name: "Balaga Effect ", email: "fakeemail@balaga.com"
       } ; 
           
       }
   })
],
pages:{
   signIn:"/auth/signin"
},

})
export { handler as GET, handler as POST }