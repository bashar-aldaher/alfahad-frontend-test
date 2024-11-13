import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAds } from "../../../store/slices/adSlice";
import { getAllAdsApi } from "../../../services/ads.service";
import AdsSlider from "./ads-slider";
import { RootState } from "../../../store";

// Interfaces for Ad data
interface Ad {
  id: number;
  title: string;
  content: string;
  image: string;
  link: string;
}

interface AdsApiResponse {
  data: Ad[];
}

const Ads = () => {
  const dispatch = useDispatch();
  const AdsData = useSelector((state: RootState) => state.ad.ads);
  const [data, setData] = useState<Ad[]>([]); // typed as Ad[]
  const [isLoading, setIsLoading] = useState(true);

  const getAllAds = async () => {
    setIsLoading(true);
    const response = await getAllAdsApi();
    if (response?.status === 200) {
      const adsData = response.data as AdsApiResponse; // Type the response here
      setData(adsData.data); // Set the ads data correctly
      dispatch(setAds(adsData.data)); // Dispatch with typed data
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!AdsData || (AdsData as AdsApiResponse)?.data?.length === 0) {
      getAllAds();
    } else {
      setData(AdsData);
      setIsLoading(false);
    }
  }, [AdsData]);

  return (
    (isLoading || data.length > 0) && (
      <section className="inner-section">
        <Container>
          <div className="section-title">Ads</div>
          <div className="section-description">
            <div className="content">
              Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue
              amet non elit vel purus. Auctor aenean ut euismod at integer id
              nulla cursus te
            </div>
          </div>
          <AdsSlider data={data} isLoading={isLoading} />
        </Container>
      </section>
    )
  );
};

export default React.memo(Ads);
