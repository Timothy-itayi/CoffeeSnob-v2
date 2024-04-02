import SwiftUI

struct Home: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("Welcome to Coffee Snob!")
                    .font(.title)
                    .padding()
                
                NavigationLink(destination: EmptyView()) {
                    Text("Back")
                        .foregroundColor(.blue)
                }
                .navigationBarHidden(true)
            }
            .navigationBarTitle("")
            .navigationBarBackButtonHidden(true)
        }
    }
}

struct Home_Previews: PreviewProvider {
    static var previews: some View {
        Home()
    }
}
