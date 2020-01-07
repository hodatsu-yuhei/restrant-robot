import array_data from "./data";
import Restaurant from "./Restaurant";
import { prompt } from "./utils";

async function main() {
  // データを読み取るパート
  const restaurants = [];

  for (let i = 0; i < array_data.length; i++) {
    restaurants.push(new Restaurant(array_data[i][0], array_data[i][1]));
  }

  // 挨拶
  const name = await prompt(
    "こんにちは、ロボットです。あなたの名前を教えてください："
  );

  // ロボットのオススメレストランが好きかどうか聞くパート
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const isVoted = await prompt(
      `私のオススメは${restaurant.name}です。
      ${restaurant.voted}人がオススメしています。
      ${name}さんは好きですか？[yes/no]:
      `
    );
    if (isVoted === "yes") {
      restaurant.voted++;
    }
  }

  // あなたのオススメのレストランを入力してもらうパート
  const newRestaurantName = await prompt(
    `${name}さんのオススメのレストランを教えてください`
  );
  restaurants.push(new Restaurant(newRestaurantName, 1));

  restaurants.forEach(restaurant =>
    console.log(`確認 console: ${restaurant.name}, ${restaurant.voted}`)
  );
}
main();
