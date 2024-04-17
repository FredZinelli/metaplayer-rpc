
import { AddIdData, CollectionOf } from "@capytale/contract-type";

import type { SimpleContentV1 } from "./simple-content";

type SimpleContentContracts = [
    AddIdData<SimpleContentV1<string>, { name: "simple-content", variant: "text" }>,
    AddIdData<SimpleContentV1<any>, { name: "simple-content", variant: "json" }>,
];

export type Contracts = CollectionOf<SimpleContentContracts>;