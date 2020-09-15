<template>
  <div class="menu__item">
    <button class="add__btn">
      <img src="@/assets/add.svg" />
    </button>
    <div class="item__container">
      <div class="item__wrapper">
        <h1 class="item__title">{{title}}</h1>
        <span class="item__description">{{description}}</span>
      </div>
      <p class="item__price">{{price}} kr</p>
    </div>
  </div>
</template>
<script>
import "./index.scss";
export default {
  name: "Menu Item",
  props: {
    title: String,
    description: String,
    price: String
  }
};
</script>