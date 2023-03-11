/// <reference path="./blockbench.d.ts"/>
import * as FileSystem from 'fs'

declare global {
	const THREE: typeof import('three')

	const Prism: typeof import('prismjs')
	const scene: THREE.Scene
	const Transformer: any

	const PathModule: typeof import('path')
	const fs: typeof FileSystem

	function rotateOnAxis(modify: OutlinerNode, axis: number, slider?: boolean): void
	function afterRotateOnAxis(): void

	// const Transformer: THREE.TransformControls
	interface HTMLImageElement {
		src: string
		tex: THREE.Texture & {
			magFilter: THREE.TextureFilter
			minFilter: THREE.TextureFilter
		}
	}
	interface Date {
		/**
		 * Returns a timestamp in the format 16:30
		 */
		getTimestamp(): string
		getDateArray(): number[]
		getDateString(): string
		dayOfYear(): number
	}
	interface Number {
		toDigitString(digits: number): string
	}
	interface Event {
		readonly ctrlOrCmd: boolean
	}
	interface Math {
		limitNumber(number: number, min: number, max: number): number
		radToDeg(radians: number): number
		degToRad(degrees: number): number
		/**
		 * Rounds the input number to N digits
		 */
		roundTo(number: number, digits: number): number
		isBetween(number: number, limit1: number, limit2: number): boolean
		/**
		 * Checks if the absolute difference between a and b is smaller than epsilon
		 */
		epsilon(a: number, b: number, epsilon: number): boolean
		trimDeg(degrees: number): number
		isPowerOfTwo(number: number): boolean
		/***
		 * Checks if the input is of type number
		 */
		isNumber(number: any): boolean
		/**
		 * Generates a random float between a and b
		 */
		randomab(a: number, b: number): number
		areMultiples(number1: number, number2: number): boolean
		getNextPower(num: number, min: number): number
		snapToValues(number: number, snap_points: number[], epsilon: number): number
	}
	interface Array<T> {
		remove(item: any): boolean
		/***
		 * Adds items to the array if they are not yet in the array
		 */
		safePush(...items: any): boolean
		equals(array: Array<any>): boolean
		replace(items: T[]): boolean
		allAre(callback: (item: T, index: number) => boolean): boolean
		findInArray(key: string, value: any): number
		positiveItems(): number
		/**
		 * Empties the array
		 */
		empty(): this
		last(): T
		allEqual(item: T): boolean
		random(): T
		toggle(item: T, state?: boolean): boolean
		/**
		 * Same as forEach, but in reverse order
		 */
		forEachReverse(callback: (item: T, index: number) => void): void
		/**
		 * Returns the amount of items that exist in this array and the reference array
		 */
		overlap(arr: Array<any>): number

		V3_set(x: number, y: number, z: number): this
		V3_set(values: ArrayVector3): this
		V3_add(x: number, y: number, z: number): this
		V3_add(values: ArrayVector3): this
		V3_subtract(x: number, y: number, z: number): this
		V3_subtract(values: ArrayVector3): this
		V3_multiply(x: number, y: number, z: number): this
		V3_multiply(values: ArrayVector3): this
		V3_divide(x: number, y: number, z: number): this
		V3_divide(values: ArrayVector3): this
		V3_toThree(): THREE.Vector3
	}
}

export {}
