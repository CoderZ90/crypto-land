import Layout from "../../components/SearchBar/Layout";
import styles from "./Coin.module.css";

const SingleCoin = ({ singleCoin }) => {

  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={singleCoin.image.large}
            alt={singleCoin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{singleCoin.name}</h1>
          <p className={styles.coin_ticker}>{singleCoin.symbol}</p>
          <p className={styles.coin_current}>
            {singleCoin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SingleCoin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const data = await res.json();

  return {
    props: {
      singleCoin: data
    }
  }
}