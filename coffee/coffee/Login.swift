import SwiftUI


struct Login: View {
    @State private var isSignedIn = false
    @State private var showSignUp = false
    @State private var email: String = ""
    @State private var signUpSuccessful = false
    @State private var signInSuccessful = false
    @State private var isGuest = false
    var body: some View {
        NavigationView {
            VStack {
                if isSignedIn || signInSuccessful || signUpSuccessful  {
                    // Navigate to the Home Screen if signed in
                    NavigationLink(destination: Home())
                    {
                        EmptyView()
                    }                } else if showSignUp {
                        EmailAuthView(authMode: .signUp, isSignedIn: $isSignedIn, email: $email, isGuest: $isGuest)
                } else {
                    EmailAuthView(authMode: .signIn, isSignedIn: $isSignedIn, email: $email, isGuest: $isGuest)
                    Button("Sign in as Guest"){
                        EmailAuthView(authMode: .signIn, isSignedIn: $isSignedIn, email: $email, isGuest: $isGuest).signInAsGuest()
                        
                        
                    }
                }
            }
        }
    }
}


