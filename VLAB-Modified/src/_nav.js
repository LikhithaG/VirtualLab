export default {
  top: [
    {
      name: "Home",
      url: "/home",
      // icon: "Home",
    },
    {
      name: "Estimation",
      url: "/elements/estimation",
      // icon: "Estimation",
    },
    {
      name: "Techniques",
      // icon: "Layers",
      url: "/home",
      children: [
        {
          name: "Delphi",
          url: "/elements/delphi",
        },
        // {
        //   name: "Delphi",
        //   url: "/elements/delphi",
        // },
      ],
    },
    {
      name: "Experiments",
      // icon: "File",
      url: "/home",
    },
    {
      name: "Exercise",
      // icon: "Cloud",
      url: "/home",
    },
  ],
};
