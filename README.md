# LLG License CLI

LawLinkGlobal License Management CLI tool for generating and managing software licenses.

## Features

- Generate standard and enterprise licenses
- Interactive license creation
- Command-line options support
- License metadata management
- Professional license file generation

## Installation

```bash
npm install -g llg-license-cli
```

## Usage

### Interactive Mode

## Command Line Options
```bash
llg init --type enterprise --org "Company Name" --project "Project Name" --key "LICENSE-KEY"
```

### Available Options

- `-t, --type <type>` - License type (standard/enterprise)
- `-o, --org <organization>` - Organization name
- `-p, --project <project>` - Project name
- `-k, --key <key>` - License key (required for enterprise)

## Output Files

- `LICENSE` - The generated license file
- `.llg-license` - License metadata file (JSON format)

## Requirements

- Node.js >= 14.0.0
- npm >= 6.0.0

## License

Proprietary - Copyright © 2024 LawLinkGlobal. All rights reserved.

