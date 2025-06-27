
export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Legal Information
          </h1>
          <div className="text-center mb-8">
            <h2 className="text-xl text-blue-600 font-semibold">
              Chanakya International Academy, Rampur Maniharan
            </h2>
            <p className="text-gray-600">Under the auspices of Baba Akhand Bharat Trust</p>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">School Registration</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>School Code:</strong> CIA-RM-2020</p>
                <p className="text-gray-700 mb-2"><strong>Affiliation Number:</strong> 330XXX (CBSE)</p>
                <p className="text-gray-700 mb-2"><strong>Recognition:</strong> Government of Uttar Pradesh</p>
                <p className="text-gray-700"><strong>Establishment Year:</strong> 2020</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trust Information</h3>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Baba Akhand Bharat Trust</h4>
                <p className="text-gray-700 mb-2"><strong>Registration Number:</strong> TR-BAB-2019-001</p>
                <p className="text-gray-700 mb-2"><strong>Registration Date:</strong> January 15, 2019</p>
                <p className="text-gray-700 mb-2"><strong>Registration Authority:</strong> Registrar of Societies, Uttar Pradesh</p>
                <p className="text-gray-700 mb-2"><strong>Trust Deed:</strong> Available for public inspection</p>
                <p className="text-gray-700"><strong>Tax Exemption:</strong> 80G & 12A certified</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Certificates</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Fire Safety Certificate</h4>
                  <p className="text-sm text-gray-600">Valid until: March 2025</p>
                  <p className="text-sm text-gray-600">Certificate No: FSC-RM-2024-089</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Building Safety Certificate</h4>
                  <p className="text-sm text-gray-600">Valid until: December 2025</p>
                  <p className="text-sm text-gray-600">Certificate No: BSC-RM-2024-156</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Pollution Control Board</h4>
                  <p className="text-sm text-gray-600">Valid until: June 2025</p>
                  <p className="text-sm text-gray-600">Certificate No: PCB-UP-2024-445</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Health Department NOC</h4>
                  <p className="text-sm text-gray-600">Valid until: September 2025</p>
                  <p className="text-sm text-gray-600">Certificate No: HD-RM-2024-223</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Management Committee</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Chairman</h4>
                    <p className="text-gray-700">Dr. Rajesh Kumar Sharma</p>
                    <p className="text-sm text-gray-600">M.A., Ph.D. (Education)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Principal</h4>
                    <p className="text-gray-700">Mrs. Sunita Verma</p>
                    <p className="text-sm text-gray-600">M.Ed., 20+ years experience</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Secretary</h4>
                    <p className="text-gray-700">Mr. Amit Singh</p>
                    <p className="text-sm text-gray-600">MBA, Educational Administration</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Treasurer</h4>
                    <p className="text-gray-700">CA Priya Gupta</p>
                    <p className="text-sm text-gray-600">Chartered Accountant</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Chanakya International Academy, Rampur Maniharan, Uttar Pradesh - 244901</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@chanakyaacademy.edu</p>
                <p className="text-gray-700"><strong>Website:</strong> www.chanakyaacademy.edu</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 text-sm">
                  All information provided is accurate to the best of our knowledge as of the date of publication. 
                  For the most current information regarding admissions, fees, and policies, please contact the school directly. 
                  The school reserves the right to modify policies and procedures as deemed necessary.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
