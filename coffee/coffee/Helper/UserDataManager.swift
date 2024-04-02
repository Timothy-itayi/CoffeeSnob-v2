// UserDataManager.swift
import Foundation
import CryptoKit
import FirebaseDatabase

class UserDataManager {
    static let shared = UserDataManager()
    
    private init() {}
    
    func storeUserData(email: String, password: String) {
        let salt = self.generateSalt()
        let hashedPassword = self.hashPassword(password: password, salt: salt)
        let userRef = Database.database().reference().child("users").childByAutoId()
        let userData = ["email": email, "password": hashedPassword, "salt": salt.base64EncodedString()]
        userRef.setValue(userData)
    }
    
    func getUserData(email: String, completion: @escaping ([String: Any]?) -> Void) {
        let usersRef = Database.database().reference().child("users")
        usersRef.queryOrdered(byChild: "email").queryEqual(toValue: email).observeSingleEvent(of: .value) { snapshot in
            guard let userData = snapshot.value as? [String: Any], let user = userData.first?.value as? [String: Any] else {
                completion(nil)
                return
            }
            completion(user)
        }
    }
    
    private func generateSalt(length: Int = 32) -> Data {
        var data = Data(count: length)
        let result = data.withUnsafeMutableBytes {
            SecRandomCopyBytes(kSecRandomDefault, length, $0.baseAddress!)
        }
        if result != errSecSuccess {
            fatalError("Failed to generate random salt")
        }
        return data
    }
    
    private func hashPassword(password: String, salt: Data) -> String {
        let inputData = Data((password + salt.base64EncodedString()).utf8)
        let hashedData = SHA256.hash(data: inputData)
        let hashString = hashedData.compactMap { String(format: "%02x", $0) }.joined()
        
        return hashString
    }
}
