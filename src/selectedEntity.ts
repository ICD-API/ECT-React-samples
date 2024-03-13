/* The function selectedEntityFunction(selectedEntity) has as parameter the selectedEntity object. 
The object contains the information about the selected entity and is defined by this interface */

export interface ISelectedEntity {
  iNo: string;
  linearizationUri: string;
  foundationUri: string;
  code: string;
  title: string;
  selectedText: string;
  searchQuery?: string;
}
