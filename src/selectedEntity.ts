/* The function selectedEntityFunction(selectedEntity) receives the selectedEntity object as its parameter. 
This object contains all information about the selected entity and is defined by the following interface */

export interface ISelectedEntity {
  iNo: string;
  linearizationUri: string;
  foundationUri: string;
  code: string;
  title: string;
  selectedText: string;
  searchQuery?: string;
}
