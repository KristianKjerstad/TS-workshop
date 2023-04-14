import { GenericForm } from "../03-generic-types/generic-form";
import {ExampleForm} from "../03-generic-types/form";

export const Generics = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Generic React prop types</h2>


      <ExampleForm header={"User"} initialValues={{firstName: "John", lastName: "Doe"}} onSubmit={() => {alert("Sumbitted!")}} />
      <ExampleForm header={"User"} initialValues={{firstName: "John", lastName: "Doe", email: "test@live.com", "phone": 123123123}} onSubmit={() => {alert("Sumbitted!")}} />


      {/*<GenericForm*/}
      {/*  header="User"*/}
      {/*  initialValues={{*/}
      {/*    firstName: "John",*/}
      {/*    lastName: "Doe",*/}
      {/*  }}*/}
      {/*  onSubmit={(values) =>*/}
      {/*    alert(*/}
      {/*      `${values.firstName} ${values.lastName}\n\n${JSON.stringify(*/}
      {/*        values,*/}
      {/*        null,*/}
      {/*        2*/}
      {/*      )}`*/}
      {/*    )*/}
      {/*  }*/}
      {/*/>*/}

    {/*  <GenericForm*/}
    {/*    header="Address"*/}
    {/*    initialValues={{*/}
    {/*      street: "Main St",*/}
    {/*      houseNumber: "123",*/}
    {/*      city: "New York",*/}
    {/*    }}*/}
    {/*    onSubmit={(values) =>*/}
    {/*      alert(*/}
    {/*        `${values.street} ${values.houseNumber} ${*/}
    {/*          values.city*/}
    {/*        }\n\n${JSON.stringify(values, null, 2)}`*/}
    {/*      )*/}
    {/*    }*/}
    {/*  />*/}
    </div>
  );
};
