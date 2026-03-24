import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// make a class
export class AuthService{
    client = new Client()
    account;
    // now make a constructor, so it is automaticallly called out when an object is created
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }
    // create account
    async createAccount({email, password, name}){
        // as this method, create account can fail so use try
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            if(userAccount){
                // calling login method
                return await this.login({email, password});
            }
            return userAccount;
        } 
        catch (error) {
            throw error;
        }
    }
    // login method
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession({email, password});
        } 
        catch (error) {
            throw error;
        }
    }
    // to verify on homepage, is there any user logged in if yes which user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } 
        catch (error) {
            return null;
        }
        
    }
    // logout method
    async logout(){
        try {
            return await this.account.deleteSession("current");
        } 
        catch (error) {
            console.log("Appwrite Service :: logout :: error", error); // a better way to show error
        }
    }

}
// create an obj with this clas, this obj will have dot access of all the methods defined in class
const authService = new AuthService();

// now export that obj
export default authService