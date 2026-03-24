import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        
        this.bucket = new Storage(this.client);
    }

    // create document
    async createPost({title, slug, content, featured_image, status, user_id}){
        try {
            return await this.databases.createDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featured_image,
                    status,
                    user_id                    
                }
            });
        } 
        catch (error) {
            throw error;
        }
    }
    
    // update document
    async updatePost(slug, {title, content, featured_image, status}){
        try {
            return await this.databases.updateDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data:{
                    title, 
                    content, 
                    featured_image, 
                    status, 
                }
            });
        } 
        catch (error) {
            throw error;
        }
    }

    // delete document
    async deletePost(slug){
        try {
            await this.databases.deleteDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
            });
            return true;
        } 
        catch (error) {
            throw error;
        }
    }

    // get document
    async getPost(slug){
        try {
            return await this.databases.getDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
            })
        } 
        catch (error) {
            throw error;
        }
    }

    // get all docs
    async getPosts(queries =[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                queries                
            });
        } 
        catch (error) {
            throw error;
        }
    }

    // file upload method
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId : conf.appwriteBucketId,
                fileId : ID.unique(),
                file
            });
        } 
        catch (error) {
            throw error
        }
    }

    // file delete method
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile({
                bucketId : conf.appwriteBucketId,
                fileId
            });
        } 
        catch (error) {
            throw error
        }
    }

    // file preview method
    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview({
                bucketId : conf.appwriteBucketId,
                fileId
            });
        } 
        catch (error) {
            throw error
        }
    }
}

const service = new Service()

export default service