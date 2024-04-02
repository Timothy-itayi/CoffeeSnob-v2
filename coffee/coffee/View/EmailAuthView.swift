import SwiftUI
import FirebaseAuth

enum AuthState {
    case signIn
    case signUp
    case home
    case guest
}

struct EmailAuthView: View {
  
    @State private var authMode: AuthState
    @Binding var isSignedIn: Bool
    @Binding var isGuest: Bool
    @Binding var email: String
    @State private var signUpSuccessful = false
    @State private var signInSuccessful = false
  
    
    init(authMode: AuthState, isSignedIn: Binding<Bool>, email: Binding<String>, isGuest: Binding<Bool>) {
          self._authMode = State(initialValue: authMode)
          self._isSignedIn = isSignedIn
          self._email = email
          self._isGuest = isGuest
      }
    
    var body: some View {
        VStack {
            
            
            Spacer()
            
            TextField("Email", text: $email)
                .textInputAutocapitalization(.never)
                .disableAutocorrection(true)
                .padding()
            
            Button(action: {
                if authMode == .signIn {
                    signInWithEmail()
            
                    signUp()
                }
            }) {
                if authMode == .signIn {
                    Text("Sign In with Email")
                    } else {
                    Text("Sign Up with Email")
                }
            }
            .foregroundColor(.white)
            .padding()
            .background(Color.blue)
            .cornerRadius(8)
            .padding()
            
            if authMode == .signIn {
                Text("Not signed up?") // Pressable text
                    .foregroundColor(.blue)
                    .onTapGesture {
                        authMode = .signUp
                    }
            } else if authMode == .home && signUpSuccessful  {
                // Display the home screen when signed up and signed in  successfully
                Home()
                    .tag("Home")
            }
            
         
            Spacer()
        }
        .padding()
        .toolbar {
            ToolbarItem(placement: .navigationBarLeading) {
                if authMode == .signUp {
                    Button(action: {
                        authMode = .signIn
                    }) {
                        Text("Back")
                    }
                }
            }
        }
        
    }
    func signInWithEmail() {
        // Call the signInWithEmail function from FirebAuth
        print("Attempting to sign in with email:", email)
        FirebAuth.shared.signInWithEmail(email: email, link: "") { _, error  in
            if let error = error {
                print("Sign-in with email failed:", error.localizedDescription)
                // Handle error
            } else {
                print("Sign-in with email successful!")
                isSignedIn = true // Update the signed-in state
            }
        }
    }

    func signUp() {
        // Generate a random password for the user
        let randomPassword = FirebAuth.shared.randomString(length: 12)
        // Call the signUp function from FirebAuth
        FirebAuth.shared.signUpWithEmail(email: email, password: randomPassword) { _,error in
            if let error = error {
                print("Sign-up with email failed:", error.localizedDescription)
                // Handle error
            } else {
                print("Sign-up with email successful!")
                isSignedIn = true // Update the signed-in state
            }
        }
    }
    
    func signInAsGuest() {
        // Call the sign-in as guest function
        FirebAuth.shared.signInAsGuest{ _, error in
            if let error = error {
                print("Sign-in as guest failed:", error.localizedDescription)
            } else {
                print("Sign-in as guest successful!")
                
                //Chech if the user is signed in as a guest
                if Auth.auth().currentUser?.isAnonymous == true {
                    
                    isGuest = true
                    isSignedIn = true 
                // Create a Home vieww
                    let homeView = Home()
                    // Wrap the Home view in a UIHostingControler
                    let homeViewController = UIHostingController(rootView : homeView)
                    
                    // Get the topmost view controller from the window scene
                    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
                    
                     let topController = windowScene.windows.first?.rootViewController{
                        // Push the home view controller onto the navigation stack
                        topController.navigationController?.pushViewController(homeViewController, animated: true )
                    }
                }
             
            }
        }
    }
}
