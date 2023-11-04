import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return (
      <div>
        <h1>TASK 2</h1>
        <h1>Дрогобич</h1>
        <p>Назва міста: Дрогобич</p>
        <p>Назва країни: Україна</p>
        <p>Рік заснування: IX століття</p>
        <h2>Фотографії пам'яток міста:</h2>
        <div>
          <img src="посилання_на_фото_пам'ятки_1" alt="Пам'ятка 1" />
        </div>
        <div>
          <img src="посилання_на_фото_пам'ятки_2" alt="Пам'ятка 2" />
        </div>
        {/* Додайте інші фотографії пам'яток міста за потреби */}
      </div>
    );
  }
}

export default CityInfo;
