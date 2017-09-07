# Button
A reuseable custom wrapper for ReactMDL Button.

## Button Sequence Diagram
```mermaid
sequenceDiagram
participant Component
participant Button
participant ReactMDL
Component ->> Button: Import Button
Button ->> ReactMDL : Import Properties
ReactMDL ->> Button : Export Properties
Button ->> Component : Export Button
```
