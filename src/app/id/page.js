import HeaderNavigation from "@/components/HeaderNavigation";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Post from "@/components/Post";

const Profile = () => {
  return (
    <main>
      <HeaderNavigation />
      <Layout>
        {
          [0, 1, 2, 3].map((item) => {
            return <Post key={new Date().getTime().toString()} />;
          })
        }
      </Layout>
      <Footer />
    </main>
  );
};

export default Profile;
