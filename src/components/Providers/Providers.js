import React from "react";
import { Container } from "react-bootstrap";

const Providers = ({ providers }) => {
  const Mapper = () =>
    providers.flatrate.map((flatRate) => (
      <>
  
        <img
          src={`https://www.themoviedb.org/t/p/original${flatRate.logo_path}`}
          alt="provider stream platform Icon"
        />
      
      </>
    ));
  return (
    <>
      <Container>
        <h5 className="providerText">Streaming here</h5>
        <>
          {providers.flatrate ? <Mapper /> : <> </>}
        </>
      </Container>
    </>
  );
};

const ProvidersBuy = ({ providers }) => {
  const Mapper = () =>
    providers.buy.map((buyer) => (
      <>
        <img
          src={`https://www.themoviedb.org/t/p/original${buyer.logo_path}`}
          alt="provider stream platform Icon"
        />
      </>
    ));
  return (
    <>
      <Container>
        <Text>Buy or Rent</Text>
        <div className="buyContainer">
          {providers.buy ? <Mapper /> : <> </>}
        </div>
      </Container>
    </>
  );
};

const ProvidersRent = ({ providers }) => {
  const Mapper = () =>
    providers.rent.map((renter) => (
      <div className="providersContainer">
        <img
          src={`https://www.themoviedb.org/t/p/original${renter.logo_path}`}
          className="providersImage"
          alt="provider stream platform Icon"
        />
      </div>
    ));
  return <>{providers.rent ? <Mapper /> : <> </>}</>;
};

export { Providers, ProvidersRent, ProvidersBuy };
