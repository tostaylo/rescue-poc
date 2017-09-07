# Form Inputs
A set of reuseable custom wrappers for Material-Ui form input fields.

## Sequence Diagram
```mermaid
sequenceDiagram
participant Component
participant FormInput
participant MaterialUi
Component ->> FormInput: Import FormInput
FormInput ->> MaterialUi : Import Properties
MaterialUi ->> FormInput : Export Properties
FormInput ->> Component : Export FormInput
```
