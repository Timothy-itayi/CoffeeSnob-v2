import UIKit
import FirebaseAuth
import SwiftUI

class MyViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        // Additional setup after loading the view.
        signInAsGuest()
    }
    
    func signInAsGuest() {
        // Sign in as a guest
        FirebAuth.shared.signInAsGuest {
            _, error in
            if let error = error {
                print("Sign-in as guest failed:", error.localizedDescription)
            } else{
                print("Sign-in as guest successful! ")
                // Check if the user is signed in as a guest
                if Auth.auth().currentUser?.isAnonymous == true {
                     
                    let  homeView =  Home()
                    let homeViewController = UIHostingController(rootView: homeView)
                    
                    self.navigationController?.pushViewController( homeViewController , animated: true )
                }
            }
        }
    }
    func signUpWithEmail(email: String) {
        // Generate a random password for the user
        let randomPassword = FirebAuth.shared.randomString(length: 12)
        
        // Implement your sign-up with email logic here
        FirebAuth.shared.signUpWithEmail(email: email, password: randomPassword) {AuthDataResult, error  in
            if let error = error {
                print("Sign-up with email failed:", error.localizedDescription)
                // Handle error
            } else {
                print("Sign-up with email successful!")
                // Proceed to the next screen or perform any necessary action
                
                
            }
        }
    }
}
