# UniTrack V3

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
	- [Commit Messages](#commit-messages)
	- [Branch Names](#branch-names)
	- [Pull Requests](#pull-requests)
		- [Title](#title)
		- [Description](#description)
		- [Example Pull Request](#example-pr)
	- [Open Source](#open-source)
- [Developing Team](#developing-team)

## Overview

This project was initiated for Coding Fest 2023 by [Udit
Samant](https://github.com/goodgameruler), [Jennifer
Tan](https://github.com/jennifermtan), [Devanshi
Mirchandani](https://github.com/devanshimirchandani), and [Parth
Bhargava](https://github.com/gitparth12). The purpose of UniTrack is to present
a university services platform with a better user experience, mainly targeting
degree planning, unit selection, and time table selection.

After two iterations of technical stacks for this project we have settled on React, Next.Js, and Vercel

We welcome any collaboration and contributions from the public to this project, please refer to the [open source contribution](#open-source) section.

_We would like to acknowledge Antriksh Dhand in his contribution as the original ideator of this project_

## Getting Started / Installation

*SSH authentication is recommended, visit [this link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) for more information.*
1. Clone the repo using `git clone --recurse-submodules git@github.com:USYDUniTrack/unitrack_v3.git
2. Run development server based on your preferred package manager.

_NOTE: Maintainer and DB-Codeowner/DB-Contributor Developers please use `vercel dev`_

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
# or
vercel dev #strictly for maintainers and testing postgres db
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Read the guidelines below to write good commit messages, branch names, and make pull requests that follow the conventions we will be using throughout the project.

### Issues
We welcome contribution to this project. Changes to this repository will be received on a issue assigned basis. To contribute...

- [ ] Find an issue that is unassigned, unmarked, or contains the help wanted label.
- [ ] Change code and create a pull request closing the issue - see [link](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue). After which a maintainer will assign you to the issue (If this issue is large in complexity and you want to be assigned to the issue, comment on the issue).

### Commit Messages

- Capitalise the subject line.
- Do not end with a period.
- Use imperative mood, i.e. instead of *"Added ..."* write *"Add ..."*.
- Keep messages logical and relevant, do not write things like *"Please work"* or *"I hate frontend"*. To help decide the extent of this, imagine trying to access a point in the project 2 weeks ago, it would be better to have something like *"Add CSS for Navbar template"* or , so that we know from a glance what the commit is for.
- For more detailed messages, use `git commit -m <title> -m <description>`, however short and concise is still preferred.

### Branch Names
Make a branch using `git checkout -b <branch_name>`.
- Names fall under one of **4** categories
	- Minor Feature: `minor-featureName`
	- Major Feature: `major-featureName`
	- Patch: `patch-patchName`
	- Miscellaneous: `name`
		- For example `documentation` for changing the README, or adding another markdown

_patch: a non API breaking change to the codebase - anyone that uses your code will not need to be concerned with the changes you pushed._
_minor: a minor API change to the codebase - anyone that uses your code will need to slightly modify implementation of their code._
_major: a major API change to the codebase - generally breaks code, wherever used, and will need significant modification._

Examples
- Adding comments - patch
- Image sizing changes (doesn't effect other code) - patch
- Changing div css - minor
- Changing div ordering - minor
- Changing server API endpoints - major as it breaks other code.

### Pull Requests
*Summarised from [this article](https://namingconvention.org/git/pull-request-naming.html).*

#### Title
- Short and descriptive summary
- Start with corresponding ticket/story id (e.g. from Jira, GitHub issue)
- Should be capitalized and written in imperative present tense
- Do not end with period
- Suggested format: *#<Ticket_ID> PR description*

#### Description
- Closing keyword with issue number - see [link](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) (e.g. Closes #0).
- Separated with a blank line from the subject
- Explain changes and justify
- Separate different issues into different paragraphs (capitalising each paragraph)
- We recommend using screenshots over long descriptions (A simple before and after will do)
- If the description is longer than a paragraph include a `TLDR:` one-liner as the first line

#### Example Pull Request
```
TLDR: (Necessary for longer PRs) this PR defines PR message syntax.
resolves/closes/fixes #ISSUE_NO (, resolves/closes/fixes #ISSUE_NO2 (, ...))

This pull request is part of the work to make it easier for people to contribute to naming convention guides.

To achieve this, we have:
- Found an issue
- Made a PR
- Made clear the changes introduced
- Included images
```

### Database
A small set of notes for working with Vercel Postgres. First and foremost, note that the current Next.Js App Router, is still incomplete in its functionality definition.

This means
- When accessing previews of Vercel always use the vercel branch preview, not the
- In a way we have hard coded the API end points for the client, but unfortunately with the APP Router it is the only way to call for a dynamic API request without creating a separate 'backend'.

### Open Source

Follow the steps below to suggest a patch or a feature for this project. For information on naming conventions for pull requests or commits, read the rest of the [contributing](#contributing) section above.

1. Fork the repo
2. Create your Feature Branch: `git checkout -b <branch_name>`
3. Commit your Changes
4. Push to the Branch: `git push origin <branch_name>`
5. Open a Pull Request

## Developing Team
- [Parth Bhargava](https://github.com/gitparth12)
- [Devanshi Mirchandani](https://github.com/devanshimirchandani)
- [Jennifer Tan](https://github.com/jennifermtan)
- [Udit Samant](https://github.com/goodgameruler)
- [Antriksh Dhand](https://github.com/antrikshdhand)
