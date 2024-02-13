import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Clickable";
import Row from "../components/Arranging";
import calculator, { defaultState } from "../utils/calc";


export default class Calculator extends Component {
  state = defaultState;

  onPressBtn = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        {}
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.onPressBtn("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.onPressBtn("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.onPressBtn("percentage")}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => this.onPressBtn("operator", "/")}
            />
          </Row>

          {}
          <Row>
            <Button text="7" onPress={() => this.onPressBtn("number", 7)} />
            <Button text="8" onPress={() => this.onPressBtn("number", 8)} />
            <Button text="9" onPress={() => this.onPressBtn("number", 9)} />
            <Button
              text="X"
              theme="accent"
              onPress={() => this.onPressBtn("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.onPressBtn("number", 4)} />
            <Button text="5" onPress={() => this.onPressBtn("number", 5)} />
            <Button text="6" onPress={() => this.onPressBtn("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.onPressBtn("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.onPressBtn("number", 1)} />
            <Button text="2" onPress={() => this.onPressBtn("number", 2)} />
            <Button text="3" onPress={() => this.onPressBtn("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.onPressBtn("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.onPressBtn("number", 0)} />
            <Button text="." onPress={() => this.onPressBtn("number", ".")} />
            <Button
              text="="
              theme="primary"
              onPress={() => this.onPressBtn("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
