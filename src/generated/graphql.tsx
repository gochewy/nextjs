import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Formatted = {
  __typename?: 'Formatted';
  id: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  searchTodo: Array<Todo>;
};


export type QuerySearchTodoArgs = {
  q: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  value: Scalars['String'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  id: Scalars['String'];
  status: Scalars['Boolean'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['String'];
  status: Scalars['Boolean'];
  title: Scalars['String'];
  userId: Scalars['String'];
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** perform the action: "getHello" */
  getHello?: Maybe<SampleOutput>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootGetHelloArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** perform the action: "searchMeili" */
  searchMeili?: Maybe<Array<Maybe<SearchResponse>>>;
  searchTodo: Array<Todo>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootSearchMeiliArgs = {
  q?: Maybe<Scalars['String']>;
};


/** query root */
export type Query_RootSearchTodoArgs = {
  q: Scalars['String'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** perform the action: "searchMeili" */
  searchMeili?: Maybe<Array<Maybe<SearchResponse>>>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootSearchMeiliArgs = {
  q?: Maybe<Scalars['String']>;
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  status: Scalars['Boolean'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  userByUser: Users;
  userId: Scalars['String'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  userByUser?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userByUser?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userByUser?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregated array relationship */
  todos_aggregate: Todos_Aggregate;
  username: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  todos?: Maybe<Todos_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUsernameKey = 'users_username_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  todos?: Maybe<Todos_Arr_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  todos_aggregate?: Maybe<Todos_Aggregate_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Username = 'username'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InserUserOnLoginMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
}>;


export type InserUserOnLoginMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'username' | 'email'>
  )> }
);

export type AllTodosByUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosByUserIdQuery = (
  { __typename?: 'query_root' }
  & { todos: Array<(
    { __typename?: 'todos' }
    & Pick<Todos, 'title' | 'created_at' | 'id' | 'status' | 'updated_at' | 'userId'>
  )> }
);

export type AllTodosCurrentUserSubscriptionVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type AllTodosCurrentUserSubscription = (
  { __typename?: 'subscription_root' }
  & { todos: Array<(
    { __typename?: 'todos' }
    & Pick<Todos, 'title' | 'created_at' | 'id' | 'status' | 'updated_at' | 'userId'>
  )> }
);

export type AddTodoMutationVariables = Exact<{
  todo: Todos_Insert_Input;
}>;


export type AddTodoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_todos_one?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'userId' | 'title' | 'status'>
  )> }
);

export type GetSearchResultsQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type GetSearchResultsQuery = (
  { __typename?: 'query_root' }
  & { searchTodo: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'userId' | 'title' | 'status'>
  )> }
);

export type DeleteTodoByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteTodoByPkMutation = (
  { __typename?: 'mutation_root' }
  & { delete_todos_by_pk?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'userId'>
  )> }
);

export type UpdateToDoByPkMutationVariables = Exact<{
  id: Scalars['uuid'];
  status: Scalars['Boolean'];
}>;


export type UpdateToDoByPkMutation = (
  { __typename?: 'mutation_root' }
  & { update_todos_by_pk?: Maybe<(
    { __typename?: 'todos' }
    & Pick<Todos, 'id' | 'status'>
  )> }
);


export const InserUserOnLoginDocument = gql`
    mutation InserUserOnLogin($username: String, $email: String) {
  insert_users_one(
    object: {username: $username, email: $email}
    on_conflict: {constraint: users_username_key, update_columns: []}
  ) {
    username
    email
  }
}
    `;
export type InserUserOnLoginMutationFn = ApolloReactCommon.MutationFunction<InserUserOnLoginMutation, InserUserOnLoginMutationVariables>;

/**
 * __useInserUserOnLoginMutation__
 *
 * To run a mutation, you first call `useInserUserOnLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInserUserOnLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [inserUserOnLoginMutation, { data, loading, error }] = useInserUserOnLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInserUserOnLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InserUserOnLoginMutation, InserUserOnLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<InserUserOnLoginMutation, InserUserOnLoginMutationVariables>(InserUserOnLoginDocument, baseOptions);
      }
export type InserUserOnLoginMutationHookResult = ReturnType<typeof useInserUserOnLoginMutation>;
export type InserUserOnLoginMutationResult = ApolloReactCommon.MutationResult<InserUserOnLoginMutation>;
export type InserUserOnLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<InserUserOnLoginMutation, InserUserOnLoginMutationVariables>;
export const AllTodosByUserIdDocument = gql`
    query AllTodosByUserId {
  todos {
    title
    created_at
    id
    status
    updated_at
    userId
  }
}
    `;

/**
 * __useAllTodosByUserIdQuery__
 *
 * To run a query within a React component, call `useAllTodosByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosByUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosByUserIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTodosByUserIdQuery, AllTodosByUserIdQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTodosByUserIdQuery, AllTodosByUserIdQueryVariables>(AllTodosByUserIdDocument, baseOptions);
      }
export function useAllTodosByUserIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTodosByUserIdQuery, AllTodosByUserIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTodosByUserIdQuery, AllTodosByUserIdQueryVariables>(AllTodosByUserIdDocument, baseOptions);
        }
export type AllTodosByUserIdQueryHookResult = ReturnType<typeof useAllTodosByUserIdQuery>;
export type AllTodosByUserIdLazyQueryHookResult = ReturnType<typeof useAllTodosByUserIdLazyQuery>;
export type AllTodosByUserIdQueryResult = ApolloReactCommon.QueryResult<AllTodosByUserIdQuery, AllTodosByUserIdQueryVariables>;
export const AllTodosCurrentUserDocument = gql`
    subscription AllTodosCurrentUser($limit: Int!, $offset: Int!) {
  todos(limit: $limit, offset: $offset, order_by: {updated_at: asc}) {
    title
    created_at
    id
    status
    updated_at
    userId
  }
}
    `;

/**
 * __useAllTodosCurrentUserSubscription__
 *
 * To run a query within a React component, call `useAllTodosCurrentUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosCurrentUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosCurrentUserSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useAllTodosCurrentUserSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<AllTodosCurrentUserSubscription, AllTodosCurrentUserSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<AllTodosCurrentUserSubscription, AllTodosCurrentUserSubscriptionVariables>(AllTodosCurrentUserDocument, baseOptions);
      }
export type AllTodosCurrentUserSubscriptionHookResult = ReturnType<typeof useAllTodosCurrentUserSubscription>;
export type AllTodosCurrentUserSubscriptionResult = ApolloReactCommon.SubscriptionResult<AllTodosCurrentUserSubscription>;
export const AddTodoDocument = gql`
    mutation AddTodo($todo: todos_insert_input!) {
  insert_todos_one(object: $todo) {
    id
    userId
    title
    status
  }
}
    `;
export type AddTodoMutationFn = ApolloReactCommon.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = ApolloReactCommon.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const GetSearchResultsDocument = gql`
    query GetSearchResults($query: String!) {
  searchTodo(q: $query) {
    id
    userId
    title
    status
  }
}
    `;

/**
 * __useGetSearchResultsQuery__
 *
 * To run a query within a React component, call `useGetSearchResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchResultsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetSearchResultsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSearchResultsQuery, GetSearchResultsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSearchResultsQuery, GetSearchResultsQueryVariables>(GetSearchResultsDocument, baseOptions);
      }
export function useGetSearchResultsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSearchResultsQuery, GetSearchResultsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSearchResultsQuery, GetSearchResultsQueryVariables>(GetSearchResultsDocument, baseOptions);
        }
export type GetSearchResultsQueryHookResult = ReturnType<typeof useGetSearchResultsQuery>;
export type GetSearchResultsLazyQueryHookResult = ReturnType<typeof useGetSearchResultsLazyQuery>;
export type GetSearchResultsQueryResult = ApolloReactCommon.QueryResult<GetSearchResultsQuery, GetSearchResultsQueryVariables>;
export const DeleteTodoByPkDocument = gql`
    mutation DeleteTodoByPk($id: uuid!) {
  delete_todos_by_pk(id: $id) {
    id
    title
    userId
  }
}
    `;
export type DeleteTodoByPkMutationFn = ApolloReactCommon.MutationFunction<DeleteTodoByPkMutation, DeleteTodoByPkMutationVariables>;

/**
 * __useDeleteTodoByPkMutation__
 *
 * To run a mutation, you first call `useDeleteTodoByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoByPkMutation, { data, loading, error }] = useDeleteTodoByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoByPkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoByPkMutation, DeleteTodoByPkMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTodoByPkMutation, DeleteTodoByPkMutationVariables>(DeleteTodoByPkDocument, baseOptions);
      }
export type DeleteTodoByPkMutationHookResult = ReturnType<typeof useDeleteTodoByPkMutation>;
export type DeleteTodoByPkMutationResult = ApolloReactCommon.MutationResult<DeleteTodoByPkMutation>;
export type DeleteTodoByPkMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoByPkMutation, DeleteTodoByPkMutationVariables>;
export const UpdateToDoByPkDocument = gql`
    mutation UpdateToDoByPk($id: uuid!, $status: Boolean!) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {
    id
    status
  }
}
    `;
export type UpdateToDoByPkMutationFn = ApolloReactCommon.MutationFunction<UpdateToDoByPkMutation, UpdateToDoByPkMutationVariables>;

/**
 * __useUpdateToDoByPkMutation__
 *
 * To run a mutation, you first call `useUpdateToDoByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateToDoByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateToDoByPkMutation, { data, loading, error }] = useUpdateToDoByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateToDoByPkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateToDoByPkMutation, UpdateToDoByPkMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateToDoByPkMutation, UpdateToDoByPkMutationVariables>(UpdateToDoByPkDocument, baseOptions);
      }
export type UpdateToDoByPkMutationHookResult = ReturnType<typeof useUpdateToDoByPkMutation>;
export type UpdateToDoByPkMutationResult = ApolloReactCommon.MutationResult<UpdateToDoByPkMutation>;
export type UpdateToDoByPkMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateToDoByPkMutation, UpdateToDoByPkMutationVariables>;