/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { RelayGlobalIdNexusFieldConfig } from "@jcm/nexus-plugin-relay-global-id"
import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    relayGlobalId<FieldName extends string>(
            fieldName: FieldName, 
            config: RelayGlobalIdNexusFieldConfig<TypeName, FieldName>
          ): void
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Project: { // root type
    done: boolean; // Boolean!
    title: string; // String!
  }
  Query: {};
  Todo: { // root type
    done: boolean; // Boolean!
    title: string; // String!
  }
  TodoConnection: { // root type
    edges?: Array<NexusGenRootTypes['TodoEdge'] | null> | null; // [TodoEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TodoEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Todo'] | null; // Todo
  }
}

export interface NexusGenInterfaces {
  Node: core.Discriminate<'Project', 'optional'> | core.Discriminate<'Todo', 'optional'>;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Project: { // field return type
    done: boolean; // Boolean!
    id: string; // ID!
    title: string; // String!
    todos: NexusGenRootTypes['TodoConnection'] | null; // TodoConnection
  }
  Query: { // field return type
    node: NexusGenRootTypes['Node'] | null; // Node
    nodes: Array<NexusGenRootTypes['Node'] | null>; // [Node]!
  }
  Todo: { // field return type
    done: boolean; // Boolean!
    id: string; // ID!
    project: NexusGenRootTypes['Project']; // Project!
    title: string; // String!
  }
  TodoConnection: { // field return type
    edges: Array<NexusGenRootTypes['TodoEdge'] | null> | null; // [TodoEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  TodoEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Todo'] | null; // Todo
  }
  Node: { // field return type
    id: string | null; // ID
  }
}

export interface NexusGenFieldTypeNames {
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Project: { // field return type name
    done: 'Boolean'
    id: 'ID'
    title: 'String'
    todos: 'TodoConnection'
  }
  Query: { // field return type name
    node: 'Node'
    nodes: 'Node'
  }
  Todo: { // field return type name
    done: 'Boolean'
    id: 'ID'
    project: 'Project'
    title: 'String'
  }
  TodoConnection: { // field return type name
    edges: 'TodoEdge'
    pageInfo: 'PageInfo'
  }
  TodoEdge: { // field return type name
    cursor: 'String'
    node: 'Todo'
  }
  Node: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  Project: {
    todos: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    node: { // args
      id: string; // ID!
    }
    nodes: { // args
      ids: string[]; // [ID!]!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Node: "Project" | "Todo"
}

export interface NexusGenTypeInterfaces {
  Project: "Node"
  Todo: "Node"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Node";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: false
    __typename: true
    isTypeOf: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}