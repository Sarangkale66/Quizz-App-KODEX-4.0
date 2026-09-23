// useState
// tuple
// const [count, setCount] = useState<number>(0);
// jab setCount call hota hai tab mera component rerender hai
// ✅ rerender -> unmount mount
// closure

import type { Component } from "./Component.js";

type Getter<T> = () => T;
type Setter<T> = (value: T) => void;

type TResult<T> = {
  get: Getter<T>;
  set: Setter<T>;
} & [Getter<T>, Setter<T>];

export function useState(initialValue:unknown, instance: Component): TResult<unknown> {
    let value = initialValue;

    const getter = () => {
        return value;
    }

    const setter = (newValue:unknown) => {
        value = newValue;
        instance.rerender();
    }

    let result = [getter, setter] as unknown as TResult<unknown>;
    result.get = getter;
    result.set = setter;


    return result;
}