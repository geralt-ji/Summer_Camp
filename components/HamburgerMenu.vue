<template>
    <div class="relative ">
      <!-- 汉堡菜单按钮 -->
      <button
        class="flex flex-col space-y-1.5 w-8 h-8 justify-center items-center"
        @click="toggleMenu"
      >
        <span
          class="block h-0.5 w-6 bg-white transition-transform duration-300"
          :class="{ 'rotate-45 translate-y-2': isOpen }"
        ></span>
        <span
          class="block h-0.5 w-6 bg-white transition-opacity duration-300"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="block h-0.5 w-6 bg-white transition-transform duration-300"
          :class="{ '-rotate-45 -translate-y-2': isOpen }"
        ></span>
      </button>
  
      <!-- 下拉菜单内容 -->
      <div
        v-show="isOpen"
        class="absolute mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 -left-40"
      >
        <ul class="py-2 text-gray-700">
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100"
              @click.prevent="toggleSubMenu('menu1')"
            >
              Menu Item 1
              <span class="float-right">▼</span>
            </a>
            <!-- 二级菜单 -->
            <ul
              v-show="activeSubMenu === 'menu1'"
              class="pl-4 py-2 space-y-1 bg-gray-50"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sub Item 1</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">Sub Item 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Menu Item 2</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Menu Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      isOpen: false,
      activeSubMenu: null, // 当前展开的二级菜单
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleSubMenu(menuName) {
      this.activeSubMenu = this.activeSubMenu === menuName ? null : menuName;
    },
    closeMenus(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
        this.activeSubMenu = null;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeMenus);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenus);
  },
};
</script>