import AppTemplate from '../../components/app-template'
import DynamicBanner from '../../components/common/dynamic-banner'
import Ads from '../../components/home/ads'
import Products from '../../components/home/products'

const Home = () => {
  return (
    <AppTemplate pageTitle={"Home"} navbar={true} footer={true}>
      <DynamicBanner />
      <Ads />
      <Products />
    </AppTemplate>
  )
}

export default Home