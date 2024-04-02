

import SwiftUI
import FirebaseCore
import Firebase
import GoogleSignIn
import FirebaseAuth


@main
struct coffeeApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
  

    var body: some Scene {
        WindowGroup {
          Login()
                
        }
    }
}
