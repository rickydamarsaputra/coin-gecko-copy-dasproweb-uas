const COIN_API_URI = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";
const coinList = document.querySelector(".coin-list");

fetch(COIN_API_URI)
	.then((res) => res.json())
	.then((data) => {
		let coins = "";

		data.map((coin, index) => {
			coins += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td class="d-flex align-items-center">
          <div>
            <img src="${coin.image}" alt="${coin.name}" width="18" height="18"/>
            <span class="ms-2 d-none d-lg-inline-block">${coin.name}</span>
          </div>
          <span class="text-uppercase ms-2 ms-lg-0 d-lg-none">${coin.symbol}</span>
        </td>
        <td>${"$" + coin.current_price.toLocaleString()}</td>
        <td>
          <span class="${coin.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}">${coin.price_change_percentage_24h != null ? coin.price_change_percentage_24h.toFixed(2) + "%" : "-"}</span>
        </td>
        <td>${"$" + coin.total_volume.toLocaleString()}</td>
      </tr>
    `;
		});

		coinList.innerHTML = coins;
	});
