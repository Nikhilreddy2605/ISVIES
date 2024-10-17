import React, { useEffect } from 'react';

const MiniSymbolOverview = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "NSE:BSE",
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "12M",
      colorTheme: "dark",
      isTransparent: false,
      autosize: true,
      largeChartUrl: ""
    });
    document.querySelector('.tradingview-widget-container__widget').appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ width: '100%', height: '100%' }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default MiniSymbolOverview;
