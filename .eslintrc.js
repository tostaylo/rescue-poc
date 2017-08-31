module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "none"
      }
    ],
    // Exceptions to the rules
    "react/require-default-props": "off",
    "class-methods-use-this": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/no-unescaped-entities": "off",
    "react/no-unused-prop-types": [
      "error",
      {
        customValidators: [],
        skipShapeProps: true
      }
    ]
  }
};
