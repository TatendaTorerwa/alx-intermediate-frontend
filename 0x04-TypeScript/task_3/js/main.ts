// js/main.ts

/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "../interface"; // Import RowID and RowElement from interface.ts
import * as CRUD from "crud"; // Import everything from crud.js

// Create a row object with RowElement type
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and get the ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with the age field
const updatedRow: RowElement = { 
  firstName: "Guillaume", 
  lastName: "Salva", 
  age: 23 
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
