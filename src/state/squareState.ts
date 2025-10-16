import { Square } from "@/models/square";
import { atom } from "jotai";

export const squareState = atom(Array(9).fill(null));