import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb className="py-4 px-6 bg-gray-50 shadow-sm rounded-md fixed top-0 w-full z-50">
      <BreadcrumbList className="flex items-center space-x-2 text-gray-600 justify-center">
        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#about">About</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#education">Education</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#experience">Experience</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#skills">Skills</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#projects">Projects</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#training">Training and Certifications</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a href="#contact">Contact</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-gray-400">/</BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-gray-600">
            <a
              href="cv_ayushree_.pdf"
              download
              className="font-bold text-gray-600"
            >
              Resume
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
