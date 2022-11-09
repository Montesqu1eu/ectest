const requireComponent = require.context(
  "@/components/global",
  true,
  /[a-z]\w+\.vue$/
);

const register = (app) => {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, "");

    if (componentName === "index") {
      const name = fileName.split("/").find((itm) => /main[A-Z]\w/.test(itm));
      app.component(name, componentConfig.default || componentConfig);
    } else if (/main[A-Z]\w/.test(componentName)) {
      app.component(componentName, componentConfig.default || componentConfig);
    }
  });
};

export default {
  register,
};
