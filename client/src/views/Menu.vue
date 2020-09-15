<template>
  <section class="menu__section">
    <h1 class="menu__title">Meny</h1>
    <div class="menu__container">
      <MenuItem
        v-for="item in items"
        :key="item"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      />
    </div>
  </section>
</template>

<script>
import "@/styles/menu.scss";
import MenuItem from "@/components/MenuItem";
export default {
  name: "Menu",
  components: {
    MenuItem
  },
  data() {
    return {
      items: [
        {
          title: "Bryggkaffe",
          price: "49",
          description: "Bryggd på månadens bönor"
        },
        {
          title: "Caffè Doppio",
          price: "49",
          description: "Bryggd på månadens bönor"
        },
        {
          title: "Cappuccino",
          price: "49",
          description: "Bryggd på månadens bönor"
        },
        {
          title: "Latte Macchiato",
          price: "49",
          description: "Bryggd på månadens bönor"
        },
        {
          title: "Kaffe Latte",
          price: "49",
          description: "Bryggd på månadens bönor"
        },
        {
          title: "Cortado",
          price: "49",
          description: "Bryggd på månadens bönor"
        }
      ]
    };
  }
};
</script>