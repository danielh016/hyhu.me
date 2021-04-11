## [0.10.0] - 2021-04-10

### Added

- Yarn added `react-router-dom`
- Added the `MothersDay2021` page

### Changed

- Moved the components of the personal website to the `Home` page

## [0.9.0] - 2020-05-03

### Added

- Added the `Awards` Section
- Pulled out most duplicated codes to form the `WideCardsSection` component

## [0.8.0] - 2020-04-26

### Added

- Added the `Articles` Section

## [0.7.0] - 2020-04-25

### Added

- Added the company and university icons to the side of each card

## [0.6.0] - 2020-04-19

### Added

- Added the `Experience` Section
- Added the `Education` Section
- Added hover animations to the components

## [0.5.0] - 2020-04-19

### Added

- Implemented the `WebsiteLinks` components
- Added my email into the introduction section
- Increased the page's responsive level by hidding the side navbar of the introuction section
- Yarn added `react-icons`

### Changed

- Reduced the length of words of the introduction

## [0.4.0] - 2020-04-18

### Added

- Added the `Introduction` component

### Changed

- Moved the `Navbar` component from `src/` to `src/components/Navbar/`
- Added the fading functionality in the navbar

## [0.3.0] - 2020-03-29

### Added

- Added the website content as a JSON file
- Implemented and designed the Navbar
- Yarn added `prop-types`, `bootstrap`, `react-bootstrap`, and `styled-components`
- Set the primary font-family as `Montserrat`
- Added `styleVariable.js` to store the commonly used style variables such as `colors`

### Removed

- Removed `App.css` and introduced `styled-components` with its CSS-in-JS functionalities to reduce the use of pure CSS in this project

## [0.2.0] - 2020-03-28

### Added

- Setup the S3 + Cloudfront infrastructure with Pulumi
- Setup the automatic CI/CD pipeline with CircleCI

### Changed

- Updated the content of App.js

### Removed

- Removed the React logo image file - `logo.svg`

## [0.1.0] - 2020-03-28

### Added

- Initialised the project with create-react-app
- Set up `eslint`, `prettier`, `husky`, `lint-staged`, and `commitizen`

### Changed

- Updated README.md from the contents initialised by create-react-app to my own
- Updated index.html and its dependencies

### Removed

- Removed the test file since it's not used in the first iteration
