import Foundation
import FirebaseAuth
import SwiftUI

struct FirebAuth {
    static let shared = FirebAuth()
    
    private init() {}
    func signInAsGuest(completion: @escaping (AuthDataResult?, Error?) -> Void) {
        Auth.auth().signInAnonymously { authResult, error in
            if let error = error {
                print("Sign-in as guest failed:", error.localizedDescription)
                completion(nil, error)
            } else {
                print("Sign-in as guest successful!")
                completion(authResult, nil)
                
            }
        }
        
    }
    // Method to sign up with email and send confirmation link
    func signUpWithEmail(email: String, password: String , completion: @escaping(AuthDataResult?, Error?) -> Void) {
        // Check if the email is already registered
        Auth.auth().createUser(withEmail: email, password: password) {authResult, error in
            if let error = error {
                print("Error signing up:", error.localizedDescription)
                completion(nil, error)
                return
            }
            print("Sign up successful!")
            UserDataManager.shared.storeUserData(email: email, password : password)
            completion(authResult, nil)
        }
    }
    // Method to generate a random string
 internal func randomString(length: Int) -> String {
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        return String((0..<length).map {_ in letters.randomElement()! })
    }
    // Method to sign in with email
    func signInWithEmail(email: String,  link: String,completion: @escaping (AuthDataResult? , Error?) -> Void) {
        Auth.auth().signIn(withEmail: email, link: link) {authResult, error in
            if let error = error {
                print("Sign-in with email failed:", error.localizedDescription)
                completion(nil , error)
            } else {
                print("Sign-in with email successful!")
                completion(authResult, nil)
            }
        }
    }
    
    // Method to send sign-up link to user's email
   private  func sendSignUpLink(toEmail email: String, completion: @escaping (Error?) -> Void) {
        // Construct the deep link URL
        guard let deepLinkURL = URL(string: "com.coffeesnob://auth?mode=signIn") else {
            print("Error: Invalid deep link URL")
            return
        }
        
        // Construct the action code settings
        let actionCodeSettings = ActionCodeSettings()
        actionCodeSettings.url = deepLinkURL
        actionCodeSettings.handleCodeInApp = true
        
        // Send the sign-up link to the user's email
         Auth.auth().sendSignInLink(toEmail: email, actionCodeSettings: actionCodeSettings) { error in
            if let error = error {
                print ("Error sending sign-up link :", error.localizedDescription)
                completion(error)
            } else {
                print("Sign-up link sent successfully to:", email )
                completion(nil)
            }
            
            
        }
        
    }
}
